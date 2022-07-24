import { Box, Center } from "native-base";
import { Button } from "native-base";
import { useCallback } from "react";
import { BetaScreenProps as Props } from "../../types";

export function BetaScreen({ navigation }: Props) {
  const handleNavigateToAlphaButton = useCallback(() => {
    navigation.navigate("Alpha");
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
        <Button onPress={handleNavigateToAlphaButton} mb={4}>
          TabOneのAlphaスクリーンに遷移します
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
