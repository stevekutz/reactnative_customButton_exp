import * as React from 'react';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';

const glyphMap = { 'icon-name': 1234, test: '∆' };
const CustomIcon = createIconSet(glyphMap, 'FontName', 'custom-icon-font.ttf');

export default class IconSetExample extends React.Component {
  render() {
    return <CustomIcon name="icon-name" size={32} color="red" />;
  }
}
