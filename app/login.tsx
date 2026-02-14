import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const PHONE_REG = /^1\d{10}$/;

export default function LoginScreen() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validatePhone = () => {
        if (!phone.trim()) {
            setPhoneError('');
            return;
        }
        if (phone.length !== 11 || !PHONE_REG.test(phone)) {
            setPhoneError('请输入正确的 11 位手机号');
            return;
        }
        setPhoneError('');
    };


    const handleLogin = () => {
        router.replace('/(tabs)');
    };
    return (
        <ThemedView style={styles.container}>
            <View style={styles.content}>
                <ThemedText type="title" style={{ fontSize: 24, alignSelf: 'center' }}>login</ThemedText>
                <View style={styles.lineWithText}>
                    <View style={styles.line} />
                    <ThemedText style={styles.loginLineText}>select your login type</ThemedText>
                    <View style={styles.line} />
                </View>
                <Text style={styles.lineText}>mobile</Text>
                <TextInput
                    value={phone}
                    onChangeText={(text) => {
                        setPhone(text.replace(/\D/g, '').slice(0, 11));
                        setPhoneError('');
                    }}
                    onBlur={validatePhone}
                    placeholder="请输入手机号"
                    placeholderTextColor="#9E9E9E"
                    keyboardType="phone-pad"
                    maxLength={11}
                    style={[styles.input, phoneError ? styles.inputError : null]}
                />
                {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}
                <Text style={styles.lineText}>password</Text>
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="请输入密码"
                    placeholderTextColor="#9E9E9E"
                    style={styles.input}
                    secureTextEntry
                />

                <View style={styles.lineWithText}>
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <ThemedText style={styles.buttonText}>登录</ThemedText>
                    </Pressable>
                </View>
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
        // alignItems: 'flex-start',
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
    inputError: {
        borderColor: '#DC2626',
    },
    errorText: {
        color: '#DC2626',
        fontSize: 12,
        marginTop: 4,
        marginBottom: 0,
    },

    button: {
        backgroundColor: '#2563EB',
        width: '100%',
        paddingVertical: 14,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
