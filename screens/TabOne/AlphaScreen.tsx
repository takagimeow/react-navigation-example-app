import { useNavigation } from "@react-navigation/native";
import { Box, Center } from "native-base";
import { Button } from "native-base";
import { useCallback } from "react";
import { AlphaScreenProps as Props } from "../../types";

export function AlphaScreen({ navigation }: Props) {
  const nav = useNavigation();
  nav.navigate("Root", {
    screen: "TabOne",
    params: {
      screen: "Alpha",
    },
  });
  const handleNavigateToBetaButton = useCallback(() => {
    navigation.navigate("Beta");
  }, []);
  const handleNavigateToGammaButton = useCallback(() => {
    navigation.navigate("Root", {
      screen: "TabTwo",
      params: {
        screen: "Gamma",
      },
    });
  }, []);
  const handleNavigateToDeltaButton = useCallback(() => {
    navigation.navigate("Root", {
      screen: "TabTwo",
      params: {
        screen: "Delta",
      },
    });
  }, []);
  return (
    <Box flex={1}>
      <Center flex={1}>
        <Button onPress={handleNavigateToBetaButton} mb={4}>
          TabOneのBetaスクリーンに遷移します
        </Button>
        <Button
          onPress={handleNavigateToGammaButton}
          colorScheme="secondary"
          mb={4}
        >
          TabTwoのGammaスクリーンに遷移します
        </Button>
        <Button onPress={handleNavigateToDeltaButton} colorScheme="amber">
          TabTwoのDeltaスクリーンに遷移します
        </Button>
      </Center>
    </Box>
  );
}
