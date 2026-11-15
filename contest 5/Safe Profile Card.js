function generateProfileCard(user) {
  // TODO: implement
  return `${user?.name ?? "Anonymous"} | ${user?.address?.city ?? "Unknown"} | followers: ${user?.social?.followers ?? "0"}`
}
