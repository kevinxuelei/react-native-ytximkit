import { NativeModules } from 'react-native';

type YtximkitType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Ytximkit } = NativeModules;

export default Ytximkit as YtximkitType;
