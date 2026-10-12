export interface SkillGroup {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI Creation',
    items: [
      'AI Video Generation',
      'Prompt Engineering',
      'AI Image Generation',
      'AI Storytelling',
      'AI Scene Design',
      'AI Character Concepts',
      'AI Product Visualization',
      'AI Advertisement Concepts',
    ],
  },
  {
    title: 'Video',
    items: [
      'Video Editing',
      'Short-form Video',
      'Cinematic Editing',
      'Social Media Reels',
      'Product Videos',
      'Visual Storytelling',
      'Motion Concepts',
      'Transitions',
      'Color / Visual Enhancement',
    ],
  },
  {
    title: 'Creative',
    items: [
      'Creative Direction',
      'Concept Development',
      'Storyboarding',
      'Visual Composition',
      'Content Creation',
      'Social Media Content',
    ],
  },
]
