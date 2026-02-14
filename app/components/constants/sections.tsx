import { Badge } from "../ui/badge"
import AnimatedWord from "../AnimatedWord"

export const sections = [
  {
    id: "hero",
    subtitle: (
      <Badge variant="outline" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        Human + Machine
      </Badge>
    ),
    title: (
      <>
        It's time to <AnimatedWord />
      </>
    ),
    showButton: true,
    buttonText: "Get Started",
    buttonLink: "https://www.jofrom.io/",
  },
  {
    id: "discovery",
    title: "Discovery",
    content: "Discover the problem. Identify operational opportunities where Humans + Machines can work together.",
  },
  {
    id: "design",
    title: "Design",
    content:
      "Design the fix. Our platform enables you to craft solutions that balance human judgment with machine efficiency.",
  },
  {
    id: "deploy",
    title: "Deploy",
    content: "Deploy the solution. Human + Machine workforce.",
  },
  {
    id: "join",
    title: (
      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform.</span>
    ),
    content: "Strike the perfect balance between Human + Machine. Start your journey to operational excellence today.",
    showButton: true,
    buttonText: "Start Now",
    buttonLink: "https://www.jofrom.io/",
  },
]
