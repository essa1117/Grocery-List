const apiRequest = async (
  url = "",
  optionObj: object | undefined = undefined,
  ErrorMessage: string | null = null
) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response) throw Error("Please reload the App");
  } catch (err) {
    ErrorMessage = (err as Error).message;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return ErrorMessage;
  }
};

export default apiRequest;
