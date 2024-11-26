import { Place } from '@/types/place';
import { notFound } from 'next/navigation';
import app from './firebaseConfig';
import {
  getDocs,
  collection,
  getFirestore,
  doc,
  getDoc,
} from 'firebase/firestore';

const URL = process.env.DB_URL as string;

const getAllPlaces = async (): Promise<Place[]> => {
  try {
    const res = await fetch(URL, { cache: 'force-cache' });

    if (!res.ok) {
      throw new Error('Error while fetching places');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

const getPlace = async (id: string): Promise<Place> => {
  try {
    const res = await fetch(`${URL}/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error('Error fetching place:', err);
    notFound();
  }
};

const db = getFirestore(app);

const getAllPlacesFirebase = async (): Promise<Place[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, 'places'));

    if (querySnapshot.empty) {
      throw new Error('No places found in the collection.');
    }

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as Place[];
  } catch (error) {
    console.error('Error while fetching places:', error);
    throw new Error('Error while fetching places');
  }
};

const getPlaceFirebase = async (id: string): Promise<Place> => {
  try {
    const docRef = doc(db, 'places', id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      notFound();
    }

    return { id: docSnap.id, ...docSnap.data() } as Place;
  } catch (error) {
    console.error(`Error while fetching place with ID ${id}:`, error);
    throw new Error(`Error while fetching place with ID ${id}`);
  }
};

export { getAllPlaces, getPlace, getAllPlacesFirebase, getPlaceFirebase };
