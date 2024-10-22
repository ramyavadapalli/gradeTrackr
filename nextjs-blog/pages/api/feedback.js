// pages/api/feedback.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { feedback } = req.body;
  
      console.log('Received Feedback:', feedback); // Log feedback temporarily
  
      return res.status(200).json({ message: 'Feedback submitted successfully!' });
    } else {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  