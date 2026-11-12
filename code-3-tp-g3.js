type CarteProps = { etudiant: Etudiant };

function CarteEtudiant({ etudiant }: CarteProps) {
  const { nom, filiere, note } = etudiant;

  return (
    <View style={styles.carte}>
      <View style={styles.enteteCarte}>
        <Text style={styles.nom}>{nom}</Text>
        <BadgeStatut note={note} />
      </View>
      <Text style={styles.information}>Filière : {filiere}</Text>
      <Text style={styles.information}>Note : {note}/20</Text>
    </View>
  );
}
