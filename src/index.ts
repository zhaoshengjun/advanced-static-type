function trimAndLower(text: string | null | undefined) {
  if (typeof text === 'string') {
    return text.trim().toLowerCase();
  }
  return text;
}
//text will be shown as different type in the if/else blocks.
