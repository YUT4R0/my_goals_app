import { colors } from "@/styles/colors"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Link } from "expo-router"

export function BackButton() {
  return (
    <Link asChild href="/">
      <MaterialIcons name="arrow-back" size={36} color={colors.white} />
    </Link>
  )
}