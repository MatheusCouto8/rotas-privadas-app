import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Olá, {user?.name || 'Usuário'}! 👋
          </Text>
          <Text style={styles.subtitle}>
            Bem-vindo à área privada do aplicativo
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Dashboard</Text>
          <Text style={styles.cardText}>
            Esta é uma área protegida que só usuários autenticados podem acessar.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Suas informações</Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>E-mail: </Text>
            {user?.email}
          </Text>
          <Text style={styles.cardText}>
            <Text style={styles.label}>ID: </Text>
            {user?.id}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Funcionalidades</Text>
          <Text style={styles.cardText}>
            • Navegação entre abas{'\n'}
            • Persistência de login{'\n'}
            • Logout seguro{'\n'}
            • Proteção de rotas
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  label: {
    fontWeight: '600',
    color: '#333',
  },
});