import { Article } from './types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Yoga for Sleep: The Ultimate Bedtime Routine',
    category: 'Sleep Hygiene',
    author: 'Dr. Sarah Jenks',
    date: 'Oct 12, 2023',
    excerpt: 'Discover a 10-minute sequence designed to lower cortisol levels and prepare your body for deep, restorative sleep.',
    imageUrl: 'https://picsum.photos/id/10/800/600',
    content: `
      <p>Sleep is the foundation of mental health. When we are sleep-deprived, our emotional regulation suffers, making anxiety and stress harder to manage. Yoga Nidra and gentle restorative poses can signal to your parasympathetic nervous system that it is time to rest.</p>
      
      <h3>Why Yoga Helps Sleep</h3>
      <p>Research indicates that mindful movement before bed reduces sleep latency (the time it takes to fall asleep). By focusing on the breath, we move out of the "fight or flight" sympathetic state and into the "rest and digest" mode.</p>

      <h3>The Routine</h3>
      <p>Start with <strong>Child's Pose (Balasana)</strong>. Kneel on the floor, touching your big toes together and sitting on your heels, then separate your knees about as wide as your hips. Exhale and lay your torso down between your thighs.</p>
      
      <p>Follow this with <strong>Legs-Up-The-Wall (Viparita Karani)</strong>. This powerful inversion helps drain lymph fluids from the legs and calms the nervous system almost instantly.</p>
    `
  },
  {
    id: '2',
    title: 'Managing Panic Attacks with Breathwork',
    category: 'Anxiety Relief',
    author: 'Mark Benson, RYT-500',
    date: 'Nov 05, 2023',
    excerpt: 'Learn how specific breathing techniques can interrupt the panic loop and ground you in the present moment.',
    imageUrl: 'https://picsum.photos/id/15/800/600',
    content: `
      <p>A panic attack can feel like a heart attack. The chest tightens, the breath becomes shallow, and the mind races. The key to stopping a panic attack is to take control of the breath.</p>
      
      <h3>The Science of the Exhale</h3>
      <p>When we inhale, our heart rate increases slightly. When we exhale, it slows down. By extending the exhale, we hack the vagus nerve to slow the heart rate and reduce physical symptoms of panic.</p>

      <h3>Technique: Box Breathing</h3>
      <p>Visualize a box. Inhale for 4 counts, hold for 4, exhale for 4, and hold empty for 4. This rhythm forces the mind to focus on counting rather than the spiral of anxious thoughts.</p>
    `
  },
  {
    id: '3',
    title: 'Morning Flow for Mental Clarity',
    category: 'Daily Routine',
    author: 'Elena Fisher',
    date: 'Dec 01, 2023',
    excerpt: 'Start your day with intention. This energizing flow clears brain fog and sets a positive tone for the day ahead.',
    imageUrl: 'https://picsum.photos/id/28/800/600',
    content: `
      <p>How you start your morning often dictates the rest of your day. Instead of reaching for your phone immediately, try 10 minutes of movement to wake up the body and mind.</p>
      
      <h3>Sun Salutations (Surya Namaskar)</h3>
      <p>The classic Sun Salutation sequence is perfect for building heat and focus. It coordinates breath with movement, creating a moving meditation that clears mental clutter.</p>

      <p>Focus on the transition between poses. The mindfulness required to step your foot forward lightly or lower down with control brings you fully into the present moment.</p>
    `
  }
];
