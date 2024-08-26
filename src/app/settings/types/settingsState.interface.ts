import { BackendErrorsInterface } from 'src/app/shared/types/backEndErrors.interface';

export interface SettingsStateInterface {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
