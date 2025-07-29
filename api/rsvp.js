export default async function handler(req, res) { if (req.method === 'POST') { try {  Reenvía los datos al Apps Script  const response = await fetchfetch('https://invitacion-boda-ly-f-git-main-benjamins-projects-ba0b721c.vercel.app/api/rsvp', {
  method: 'POST',
  body: JSON.stringify({nombre, apellido}),
  headers: {'Content-Type': 'application/json'}
}) 
{ 
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
