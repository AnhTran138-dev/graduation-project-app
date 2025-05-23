import React, { FunctionComponent } from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';

import { cn } from '~/lib/cn';

interface CardBasicProps {
  className?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const CardBasic: FunctionComponent<CardBasicProps> = ({ className, children, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <View
        className={cn(
          'rounded-lg bg-white p-4', // base card styles
          Platform.OS === 'ios' ? 'shadow-md' : 'elevation-3', // platform-specific shadow
          className
        )}
        style={
          Platform.OS === 'ios'
            ? {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }
            : {
                elevation: 3,
              }
        }>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default CardBasic;
