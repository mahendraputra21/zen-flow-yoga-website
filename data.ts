
import { Article, YogaPose } from './types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Yoga for Sleep: The Ultimate Bedtime Routine',
    category: 'Sleep Hygiene',
    author: 'Dr. Sarah Jenks',
    date: 'Oct 12, 2023',
    excerpt: 'Discover a 10-minute sequence designed to lower cortisol levels and prepare your body for deep, restorative sleep.',
    imageUrl: 'https://images.unsplash.com/photo-1511978293554-7b92f19bd77d?auto=format&fit=crop&q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200',
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
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200',
    content: `
      <p>How you start your morning often dictates the rest of your day. Instead of reaching for your phone immediately, try 10 minutes of movement to wake up the body and mind.</p>
      
      <h3>Sun Salutations (Surya Namaskar)</h3>
      <p>The classic Sun Salutation sequence is perfect for building heat and focus. It coordinates breath with movement, creating a moving meditation that clears mental clutter.</p>

      <p>Focus on the transition between poses. The mindfulness required to step your foot forward lightly or lower down with control brings you fully into the present moment.</p>
    `
  }
];

export const yogaPoses: YogaPose[] = [
  {
    id: 'childs-pose',
    englishName: "Child's Pose",
    sanskritName: "Balasana",
    difficulty: "Beginner",
    category: "Restorative",
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Gently stretches the hips, thighs, and ankles.",
      "Calms the brain and helps relieve stress and fatigue.",
      "Relieves back and neck pain when done with head and torso supported."
    ],
    contraindications: [
      "Diarrhea",
      "Pregnancy (widen knees deeply to avoid pressing on belly)",
      "Knee injuries"
    ],
    steps: [
      "Kneel on the floor. Touch your big toes together and sit on your heels, then separate your knees about as wide as your hips.",
      "Exhale and lay your torso down between your thighs.",
      "Lay your hands on the floor alongside your torso, palms up, and release the fronts of your shoulders toward the floor.",
      "Stay in the pose from 1 to 3 minutes."
    ]
  },
  {
    id: 'downward-dog',
    englishName: "Downward Facing Dog",
    sanskritName: "Adho Mukha Svanasana",
    difficulty: "Beginner",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Calms the brain and helps relieve stress and mild depression.",
      "Energizes the body.",
      "Stretches the shoulders, hamstrings, calves, arches, and hands.",
      "Strengthens the arms and legs."
    ],
    contraindications: [
      "Carpal tunnel syndrome",
      "Diarrhea",
      "Pregnancy: Do not do this pose late-term.",
      "High blood pressure or headache"
    ],
    steps: [
      "Come onto the floor on your hands and knees.",
      "Exhale and lift your knees away from the floor.",
      "Lengthen your tailbone away from the back of your pelvis and press it lightly toward the pubis.",
      "Push your top thighs back and stretch your heels onto or down toward the floor.",
      "Straighten your knees but be sure not to lock them."
    ]
  },
  {
    id: 'warrior-2',
    englishName: "Warrior II",
    sanskritName: "Virabhadrasana II",
    difficulty: "Intermediate",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Strengthens and stretches the legs and ankles.",
      "Stretches the groins, chest and lungs, shoulders.",
      "Stimulates abdominal organs.",
      "Increases stamina."
    ],
    contraindications: [
      "Diarrhea",
      "High blood pressure",
      "Neck problems: Don't turn your head to look over the front hand; continue to look straight ahead with both sides of the neck lengthened evenly."
    ],
    steps: [
      "Stand in Tadasana (Mountain Pose). With an exhalation, step or lightly jump your feet 3 to 4 feet apart.",
      "Raise your arms parallel to the floor and reach them actively out to the sides.",
      "Turn your right foot slightly to the right and your left foot out to the left 90 degrees.",
      "Exhale and bend your left knee over the left ankle, so that the shin is perpendicular to the floor.",
      "Turn your head to the left and look out over your fingers."
    ]
  },
  {
    id: 'tree-pose',
    englishName: "Tree Pose",
    sanskritName: "Vrksasana",
    difficulty: "Beginner",
    category: "Balance",
    imageUrl: "https://images.unsplash.com/photo-1599447292180-45fd84092ef0?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Strengthens thighs, calves, ankles, and spine.",
      "Stretches the groins and inner thighs, chest and shoulders.",
      "Improves sense of balance.",
      "Relieves sciatica and reduces flat feet."
    ],
    contraindications: [
      "Headache",
      "Insomnia",
      "Low blood pressure",
      "High blood pressure: Don't raise arms overhead."
    ],
    steps: [
      "Stand in Tadasana. Shift your weight slightly onto the left foot.",
      "Bend your right knee and reach down with your right hand and clasp your right ankle.",
      "Draw your right foot up and place the sole against the inner left thigh.",
      "Press the right foot sole against the inner thigh and resist with the outer left leg.",
      "Gaze softly at a fixed point in front of you on the floor."
    ]
  },
  {
    id: 'corpse-pose',
    englishName: "Corpse Pose",
    sanskritName: "Savasana",
    difficulty: "Beginner",
    category: "Restorative",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Calms the brain and helps relieve stress and mild depression.",
      "Relaxes the body.",
      "Reduces headache, fatigue, and insomnia.",
      "Helps to lower blood pressure."
    ],
    contraindications: [
      "Back injury: Do this pose with your knees bent and your feet on the floor, or with your knees supported on a bolster.",
      "Pregnancy: Raise your head and chest on a bolster."
    ],
    steps: [
      "Sit on the floor with your knees bent, feet on the floor, and lean back onto your forearms.",
      "Inhale and slowly extend your legs (one at a time if necessary).",
      "Soften your groins. Release your arms to the floor, angled evenly away from the sides of your torso.",
      "Turn your arms outward and stretch them away from the space between the shoulder blades.",
      "Rest the back of your hands on the floor."
    ]
  },
  {
    id: 'cobra-pose',
    englishName: "Cobra Pose",
    sanskritName: "Bhujangasana",
    difficulty: "Beginner",
    category: "Backbend",
    imageUrl: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Strengthens the spine.",
      "Stretches chest and lungs, shoulders, and abdomen.",
      "Firms the buttocks.",
      "Stimulates abdominal organs.",
      "Helps relieve stress and fatigue."
    ],
    contraindications: [
      "Back injury",
      "Carpal tunnel syndrome",
      "Headache",
      "Pregnancy"
    ],
    steps: [
      "Lie on the floor on your belly. Stretch your legs back, tops of the feet on the floor.",
      "Spread your hands on the floor under your shoulders. Hug your elbows back into your body.",
      "Inhale and begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs.",
      "Firm your shoulder blades against your back, puffing your side ribs forward."
    ]
  }
];
