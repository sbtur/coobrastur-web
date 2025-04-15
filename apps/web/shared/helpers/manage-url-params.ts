export const pushUrlParams = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({}, '', url);
};

export const removeUrlParams = ({ key }: { key: string }) => {
  const url = new URL(window.location.href);
  url.searchParams.delete(key);
  window.history.pushState({}, '', url);
};
