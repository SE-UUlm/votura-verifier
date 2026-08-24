import axios, { AxiosError } from 'axios';
import i18next from 'i18next';
import { api } from './api.ts';
import { hasMessage } from './hasMessage.ts';

export const getter = async (url: string): Promise<unknown> => {
  try {
    const response = await api.get(url, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json',
      },
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data !== undefined && hasMessage(error.response.data)
          ? error.response.data.message
          : i18next.t(
              'theVerificationReportCouldNotBeRead',
              'The verification report could not be read. The published data did not match the format this service expects.',
            );

      throw new AxiosError(errorMessage, error.code, error.config, error.request, error.response);
    }

    throw error;
  }
};
