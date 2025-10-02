import { Redirect } from 'expo-touter';

export default function index() {
    //Redireciona para login por padrão
    //O authcontext ira gerenciar o redirecionamento correto
    return <Redirect href="/(auth)/login" />;
}