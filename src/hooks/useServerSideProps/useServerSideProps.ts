import { GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export const useServerSideProps = async (
  getCurrentPageProps: (params: ParsedUrlQuery | undefined) => Promise<string | null>,
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  const { params } = context;
  //
  // const propType = await getCurrentPageProps(params);
  //
  // if (propType === 'not found') {
  //   return { redirect: { destination: '/not-found', permanent: true } };
  // }
  //
  // if (propType !== null) {
  //   return { props: { type: propType } };
  // }

  return { props: {} };
};
