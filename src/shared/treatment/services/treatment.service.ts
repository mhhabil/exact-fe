import { ITreatmentModel } from '@modules/site/patient-list/models';
import { StorageService } from '@shared/local-storage';

export class TreatmentService {
  set(value: ITreatmentModel) {
    return StorageService().set('treatment', JSON.stringify(value));
  }

  get(): ITreatmentModel | undefined {
    const treatment = StorageService().get('treatment');
    if (!treatment) {
      return undefined;
    }
    return JSON.parse(treatment);
  }

  destroy() {
    StorageService().destroy('treatment');
  }
}
