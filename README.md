# DePlant

## Styles

We style our app with [tailwind-css for react-native](https://github.com/jaredh159/tailwind-react-native-classnames)

Usage:

```
import tw from '@core/styles/tailwind';

const PlantScanner = () => {
  return (
    <View>
      <Text style={tw`bg-very-dark-green`}>PlantScanner</Text>
    </View>
  );
};
```

If you want adjust config, make changes in `tailwind.config.js`.