export default function App() {
  const nombreAdmis = etudiants.filter(e => e.note >= 10).length;
  const total = etudiants.reduce((somme, e) => somme + e.note, 0);
  const moyenne = (total / etudiants.length)
    .toFixed(1)
    .replace('.', ',');

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.titre}>CampusCards</Text>
      <Text style={styles.sousTitre}>Mes étudiants- IAIL S5</Text>

      <View style={styles.resume}>
        <Text style={styles.texteResume}>
          Admis : {nombreAdmis} / {etudiants.length}
        </Text>
        <Text style={styles.texteResume}>
          Moyenne : {moyenne}/20
        </Text>
      </View>

      {etudiants.map(etudiant => (
        <CarteEtudiant key={etudiant.id} etudiant={etudiant} />
      ))}
    </ScrollView>
  );
}
