import { restaurantConfig } from "@/config/restaurant.config";
import { MenuExperience } from "@/components/MenuExperience";

export default function Home() {
  return <MenuExperience config={restaurantConfig} />;
}
