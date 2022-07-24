import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
};

export type RootTabParamList = {
  TabOne: NavigatorScreenParams<TabOneStackParamList>;
  TabTwo: NavigatorScreenParams<TabTwoStackParamList>;
};

export type TabOneStackParamList = {
  Alpha: undefined;
  Beta: undefined;
};

export type TabTwoStackParamList = {
  Gamma: undefined;
  Delta: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type TabOneStackScreenProps<Screen extends keyof TabOneStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabOneStackParamList, Screen>,
    CompositeScreenProps<
      BottomTabScreenProps<RootTabParamList>,
      NativeStackScreenProps<RootStackParamList>
    >
  >;

export type TabTwoStackScreenProps<Screen extends keyof TabTwoStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabTwoStackParamList, Screen>,
    CompositeScreenProps<
      BottomTabScreenProps<RootTabParamList>,
      NativeStackScreenProps<RootStackParamList>
    >
  >;

// TabOne Screens

export type AlphaScreenProps = TabOneStackScreenProps<"Alpha">;
export type BetaScreenProps = TabOneStackScreenProps<"Beta">;

// TabTwo Screens

export type GammaScreenProps = TabTwoStackScreenProps<"Gamma">;
export type DeltaScreenProps = TabTwoStackScreenProps<"Delta">;