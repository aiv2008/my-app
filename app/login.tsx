import { ThemedText } from '@/components/themed-text';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { ScrollView, StyleSheet, View } from 'react-native';

// 页面底层：舒服的蓝色（毛玻璃背后的底色）
const pageBg = {
    light: '#E6F4FE',
    dark: '#1E3A5F',
};

// 登录框：半透明白 + 细边框，无第三方，纯 RN 实现“玻璃”感
const glassStyle = {
    light: {
        backgroundColor: 'rgba(255, 255, 255, 0.35)',
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    dark: {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderColor: 'rgba(255, 255, 255, 0.2)',
    },
};

export default function Login() {
    const colorScheme = useColorScheme();
    const scheme = colorScheme ?? 'light';
    const bg = pageBg[scheme];
    const glass = glassStyle[scheme];

    return (
        <View style={[styles.container, { backgroundColor: bg }]}>
            <ScrollView
                style={[
                    styles.content,
                    {
                        backgroundColor: glass.backgroundColor,
                        borderWidth: 1,
                        borderColor: glass.borderColor,
                    },
                ]}
            >
                <ThemedText style={styles.title}>login</ThemedText>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        paddingHorizontal: 24,
        paddingTop: 48,
        paddingBottom: 32,
        borderRadius: 16,
        width: '88%',
        maxWidth: 380,
        alignSelf: 'center',
        overflow: 'hidden',
        height: '60%',
    },
});