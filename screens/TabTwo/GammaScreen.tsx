import { Box, Center } from "native-base";
import { Button } from "native-base";
import { useCallback } from "react";
import { GammaScreenProps as Props } from "../../types";

export function GammaScreen({ navigation }: Props) {
  const handlePress = useCallback(() => {
    navigation.navigate("Root", {
      screen: "TabOne",
      params: {
        screen: "Alpha",
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
        <Button onPress={handleNavigateToAlphaButton} mb={4}>
          TabOneのAlphaスクリーンに遷移します
        </Button>
        <Button
          onPress={handleNavigateToBetaButton}
          colorScheme="secondary"
          mb={4}
        >
          TabOneのBetaスクリーンに遷移します
        </Button>
        <Button onPress={handleNavigateToDeltaButton} colorScheme="amber">
          TabTwoのDeltaスクリーンに遷移します
        </Button>
      </Center>
    </Box>
  );
}
