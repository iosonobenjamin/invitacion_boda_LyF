export default async function handler(req, res) { if (req.method === 'POST') { try {  Reenvía los datos al Apps Script  const response = await fetch('https://script.google.com/macros/s/AKfycbwPXEIhGjCXYTrHMLCRVbNI3VWtO05tXMrr4oscm_bBX_b9cqpV0iJ2KXrLnbQCzOr8uQ/exec', { method: 'POST' , encabezados: { 'Content-Type': 'application/json' }, body: JSON. stringify(req.body), 
 }); if (respuesta.ok) { 
 res.status(200). json({ mensaje: 'OK' }); 
 } else { 
 res.status(500). json({ message: 'Error en Apps Script' }); 
 } 
 } catch (error) { 
 res.status(500). json({ message: 'Error en backend', error: error.mensaje }); 
 } 
 } else { 
 res.status(405). json({ mensaje: 'Método no permitido' });
  }
}