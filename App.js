import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import AddTodo from './components/AddTodo';
import CustomButton from './components/CustomButton';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return <SafeAreaView style={styles.container}>
    <Header title="TodoApp" color="blue" />
    {/* <Header title="Home Screen" color="lightblue" /> */}
    <AddTodo />
    {/* <CustomButton /> */}
    <Footer />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})



export default App;