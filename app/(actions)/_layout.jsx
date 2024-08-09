import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Loader } from "../../components";
import { useGlobalContext } from "../../context/GlobalProvider";

const ActionsLayout = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && !isLogged) return <Redirect href="/sign-in" />;

  return (
    <>
      <Stack>
        <Stack.Screen
          name="buy"
          options={{
            headerShown: false,
          }}
        />
      </Stack>

      <Loader isLoading={loading} />
      <StatusBar backgroundColor="#0E1515" style="light" />
    </>
  );
};

export default ActionsLayout;
