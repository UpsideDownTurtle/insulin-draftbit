import React from 'react';
import * as CustomCode from '../components.js';
import {
  Divider,
  Icon,
  ScreenContainer,
  Slider,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';

//6/21/24

const FilterbyTagsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const insulincalc = (weight, grams) => {
    weight = weight / 4;
    weight = 500 / weight;
    weight = grams / weight;
    return weight;
  };

  const [bloodSugar, setBloodSugar] = React.useState(0);
  const [weightLbs, setWeightLbs] = React.useState(0);
  const [carbsG, setCarbsG] = React.useState(0);

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={[styles.View_42, { borderColor: theme.colors.divider }]}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('BookbitWelcomeScreen', {});
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Icon
            style={styles.Iconlc}
            color={theme.colors.light}
            name="Feather/x"
            size={24}
          />
        </Touchable>

        <Text
          style={[
            theme.typography.headline5,
            styles.Textw6,
            { color: theme.colors.strong },
          ]}
        >
          {'Insulin Calculator '}
          {null}
        </Text>

        <Touchable
          onPress={() => {
            try {
              const units = insulincalc(weightLbs, carbsG);
              navigation.navigate('FilterbyTagsCopyScreen', { units: units });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={[
              styles.Viewgt,
              {
                backgroundColor: theme.colors.primary,
                borderRadius: theme.roundness,
              },
            ]}
          >
            <Text
              style={[
                theme.typography.button,
                { color: theme.colors.strongInverse },
              ]}
            >
              {`Done`}
            </Text>
          </View>
        </Touchable>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewJrContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
      >
        <Text style={{ color: theme.colors.strong }}>{'Insulin Type'}</Text>

        <View style={styles.Views8}>
          <Touchable style={styles.Touchabledh}>
            <View
              style={[
                styles.ViewMf,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Intermediate - Acting'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableQj}>
            <View
              style={[
                styles.Viewgt,
                {
                  backgroundColor: theme.colors.divider,
                  borderRadius: theme.roundness,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Rapid - Acting'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.Touchable_60}>
            <View
              style={[
                styles.ViewRb,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Short - Acting'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableYO}>
            <View
              style={[
                styles.View_46,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Long - Acting'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableoC}>
            <View
              style={[
                styles.Viewzb,
                {
                  borderRadius: theme.roundness,
                  backgroundColor: theme.colors.divider,
                },
              ]}
            >
              <Text
                style={[
                  theme.typography.button,
                  { color: theme.colors.strong },
                ]}
              >
                {'Pre-Mixed'}
              </Text>
            </View>
          </Touchable>
        </View>
        <Divider style={styles.Divideroz} color={theme.colors.divider} />
        <Text style={[styles.TextiG, { color: theme.colors.strong }]}>
          {'Blood Sugar in mg/dL'}
        </Text>
        <View style={styles.ViewxU} />
        <Slider
          onValueChange={bloodSugar => {
            try {
              setBloodSugar(bloodSugar);
            } catch (err) {
              console.error(err);
            }
          }}
          value={bloodSugar}
          minimumValue={54}
          maximumValue={180}
          step={1}
        />
        <Text style={{ color: theme.colors.strong }}>
          {
            '54                                                                              180'
          }
        </Text>
        <Divider style={styles.DividerRE} color={theme.colors.divider} />
        <Text style={{ color: theme.colors.strong }}>{'Weight in lbs'}</Text>
        <Slider
          onValueChange={weightLbs => {
            try {
              setWeightLbs(weightLbs);
            } catch (err) {
              console.error(err);
            }
          }}
          value={weightLbs}
          minimumValue={100}
          maximumValue={500}
          step={1}
        />
        <Text style={{ color: theme.colors.strong }}>
          {
            '100                                                                       500'
          }
        </Text>
        <Divider style={styles.Dividerav} color={theme.colors.divider} />
        <View style={styles.ViewPK} />
        <Text style={{ color: theme.colors.strong }}>
          {'Grams of Carbs consumed'}
        </Text>
        <Slider
          onValueChange={carbsG => {
            try {
              setCarbsG(carbsG);
            } catch (err) {
              console.error(err);
            }
          }}
          value={carbsG}
          maximumValue={500}
          step={5}
        />
        <Text style={{ color: theme.colors.strong }}>
          {
            '0                                                                            500'
          }
        </Text>
      </ScrollView>

      <Touchable style={styles.TouchableB5}>
        <Text
          style={[
            theme.typography.headline4,
            styles.TextXU,
            { color: theme.colors.strong },
          ]}
        >
          {weightLbs}
          {' in pounds\n'}
          {bloodSugar}
          {' in mg/dL\n'}
          {carbsG}
          {' grams of carbs consumed\n'}
          {null}
          {'\n'}
        </Text>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Iconlc: {
    width: 24,
    height: 24,
  },
  Textw6: {
    textAlign: 'center',
  },
  Viewgt: {
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 8,
  },
  View_42: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
  },
  ViewMf: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchabledh: {
    marginTop: 8,
  },
  Viewgt: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableQj: {
    marginTop: 8,
  },
  ViewRb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  Touchable_60: {
    marginTop: 8,
  },
  View_46: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableYO: {
    marginTop: 8,
  },
  Viewzb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginRight: 8,
  },
  TouchableoC: {
    marginTop: 8,
  },
  Views8: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  Divideroz: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  TextiG: {
    marginBottom: 8,
  },
  ViewxU: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  DividerRE: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  Dividerav: {
    marginTop: 24,
    marginBottom: 16,
    height: 1,
  },
  ViewPK: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  ScrollViewJrContent: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  TextXU: {
    marginBottom: 32,
    marginLeft: 16,
  },
  TouchableB5: {
    marginTop: 60,
  },
});

export default withTheme(FilterbyTagsScreen);
