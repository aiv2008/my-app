import { useRouter } from 'expo-router';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
    const router = useRouter();

    return (
        <ThemedView style={styles.container}>
            <View style={styles.content}>
                <ThemedText type="title" style={{ fontSize: 24 }}>登录你的帐号</ThemedText>
                <View style={styles.lineWithText}>
                    <View style={styles.line} />
                    <ThemedText style={styles.loginLineText}>登录方式</ThemedText>
                    <View style={styles.line} />
                </View>
                <Text style={styles.lineText}>手机号</Text>
                <TextInput
                    placeholder="请输入手机号"
                    placeholderTextColor="#9E9E9E"
                    style={styles.input}
                />
                <Text style={styles.lineText}>密码</Text>
                <TextInput
                    placeholder="请输入密码"
                    placeholderTextColor="#9E9E9E"
                    style={styles.input}
                />
            </View>
        </ThemedView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        // backgroundColor: '#FAFAFA'
    },
    content: {
        width: '100%',
        maxWidth: 360,
        minHeight: 240,
        alignItems: 'flex-start',
        // backgroundColor: 'rgba(100, 180, 255, 0.25)',
        borderRadius: 16,
        paddingVertical: 32,
        paddingHorizontal: 24,
    },
    hint: {
        marginTop: 8,
        marginBottom: 24,
        opacity: 0.8,
    },
    link: {
        marginTop: 16,
    },
    lineWithText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 24,
        width: '100%',
    },
    line: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 12,
    },
    loginLineText: {
        color: '#9E9E9E',
        fontSize: 14,
    },

    lineText: {
        color: '#9E9E9E',
        fontSize: 12,

    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 4,
    },
});
