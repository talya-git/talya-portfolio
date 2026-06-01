export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { jobDescription, profile } = req.body;
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const systemPrompt = `You are an AI Job Matcher agent for Talya Toledano. 
Your job is to analyze job descriptions and determine how well they match her profile.

Her profile:
${profile}

For each job description, respond with:
1. A priority level: High 🔥 / Medium 🟡 / Low 🔵
2. Match score (0-100%)
3. Matching skills found
4. Whether it's an AI/LLM role or Full Stack role
5. A recommendation (apply ASAP / worth applying / lower priority)

Format your response clearly with bold markers (**text**) and emojis.
Keep it concise and actionable. Answer in English.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Analyze this job description:\n\n${jobDescription}` }
        ],
        max_tokens: 500,
        temperature: 0.3
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || 'OpenAI error' });
    }

    return res.status(200).json({ analysis: data.choices[0].message.content });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
