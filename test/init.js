// init.js
db = db.getSiblingDB('manage_books'); // Cambia a la base de datos 'manage_books'

// Puedes agregar colecciones y documentos aquí
db.createCollection('example_collection'); // Crea una colección de ejemplo
db.example_collection.insert({ name: 'Sample Document' }); // Inserta un documento de ejemplo
