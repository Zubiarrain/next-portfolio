import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface FormData {
  id?: number;
  user_email: string;
  user_message: string;
}

interface MyDB extends DBSchema {
  formData: {
    key: number;
    value: FormData;
  };
}

let dbPromise: Promise<IDBPDatabase<MyDB>> | null = null;

const getDbPromise = () => {
  if (typeof window === 'undefined') {
    // Si no estamos en el navegador, no hacemos nada.
    return null;
  }
  if (!dbPromise) {
    dbPromise = openDB<MyDB>('contact-form-db', 1, {
      upgrade(db) {
        db.createObjectStore('formData', {
          keyPath: 'id',
          autoIncrement: true,
        });
      },
    });
  }
  return dbPromise;
};

export const addFormData = async (data: FormData) => {
  const db = getDbPromise();
  if (!db) return;
  (await db).add('formData', data);
};

export const getAllFormData = async () => {
  const db = getDbPromise();
  if (!db) return [];
  return (await db).getAll('formData');
};

export const deleteFormData = async (id: number) => {
  const db = getDbPromise();
  if (!db) return;
  (await db).delete('formData', id);
};
