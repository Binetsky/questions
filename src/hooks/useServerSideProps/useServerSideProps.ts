import { GetServerSidePropsContext, GetServerSidePropsResult, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { appActions } from '@features/AppState';

export const useServerSideProps = async (
  getCurrentPageProps: (params: ParsedUrlQuery | undefined) => Promise<string | null>,
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
): Promise<GetServerSidePropsResult<Record<string, unknown>>> => {
  const {
    params,
    req: {
      headers: {
        'x-rbc-originalname': rbcHost,
        host,
      },
    },
  } = context;

  appActions.setHostname({ hostname: rbcHost as string || host });
  appActions.getSubscribeChannels();

  // await Promise.all<unknown>([
  //   appActions.getFoxVersion(),
  //   siteHeaderFeatureActions.getTopLineData(),
  //   bSideActions.getPublisherTagList(),
  //   bSideActions.getTagList(),
  //   bSideActions.getLatestNews(),
  //   appActions.getMasterTags(),
  //   appActions.getSystemSettings(),
  // ]);

  const propType = await getCurrentPageProps(params);

  if (propType === 'not found') {
    return { redirect: { destination: '/not-found', permanent: true } };
  }

  if (propType !== null) {
    return { props: { type: propType } };
  }

  return { props: {} };
};
