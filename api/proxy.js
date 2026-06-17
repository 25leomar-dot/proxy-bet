module.exports = async (req, res) => {
  const targetUrl = 'https://bfe.ebetapi.com/v1/live/esports';
  const fetch = (await import('node-fetch')).default;
  
  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Referer': 'https://www.ebetapi.com/'
      }
    });
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro na conexão' });
  }
};
