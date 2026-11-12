type BadgeProps = { note: number };

function BadgeStatut({ note }: BadgeProps) {
  const admis = note >= 10;

  return (
    <View
      style={[
        styles.badge,
        admis ? styles.badgeAdmis : styles.badgeAjourne,
      ]}
    >
      <Text style={styles.texteBadge}>
        {admis ? 'Admis' : 'Ajourné'}
      </Text>
    </View>
  );
}
