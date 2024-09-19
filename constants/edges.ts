import { edge1, edge2, edge3, edge4, edge5 } from "@/assets/edge";
import { arrow1, arrow2, arrow3, arrow4, arrow5 } from "@/assets/edge/arrow";
import { Card } from "@/components/Edge/EdgeCard";

export const edges = [
  {
    id: 1,
    caption: "Эффективность<br/>в удалении жира<br/>и загрязнений",
    icon: edge1,
    arrow: arrow1,
  },
  {
    id: 2,
    caption: "Экологичность<br/>и безопасность<br/>для здоровья",
    icon: edge2,
    arrow: arrow2,
  },
  {
    id: 3,
    caption: "Удобство<br/>использования",
    icon: edge3,
    arrow: arrow3,
  },
  {
    id: 4,
    caption: "Доступная<br/>цена",
    icon: edge4,
    arrow: arrow4,
  },
  {
    id: 5,
    caption: "Премиальные<br/>рецептуры",
    icon: edge5,
    arrow: arrow5,
  },
] satisfies Card[];
