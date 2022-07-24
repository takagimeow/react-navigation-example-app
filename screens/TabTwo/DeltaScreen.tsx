import { Box, Center } from "native-base";
import { Button } from "native-base";
import { useCallback } from "react";
import { DeltaScreenProps as Props } from "../../types";

export function DeltaScreen({ navigation }: Props) {
  const handleNavigateToGammaButton = useCallback(() => {
    navigation.navigate("Gamma");
  }, []);
  const handleNavigateToAlphaButton = useCallback(() => {
    navigation.navigate("Root", {
      screen: "TabOne",
      params: {
        screen: "Alpha",
      },
    });
  }, []);
  const handleNavigateToBetaButton = useCallback(() => {
    navigation.navigate("Root", {
      screen: "TabOne",
      params: {
        screen: "Beta",
      },
    });
  }, []);
  return (
    <Box flex={1}>
      <Center flex={1}>
        <Button
          onPress={handleNavigateToGammaButton}
          colorScheme="amber"
          mb={4}
        >
          TabTwoのGammaスクリーンに遷移します
        </Button>
        <Button onPress={handleNavigateToAlphaButton} mb={4}>
          TabOneのAlphaスクリーンに遷移します
        </Button>
        <Button onPress={handleNavigateToBetaButton} colorScheme="secondary">
          TabOneのBetaスクリーンに遷移します
        </Button>
      </Center>
    </Box>
  );
}
