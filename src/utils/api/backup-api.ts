/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import type { Api } from '../../api';
import { BackupApi } from '../../generated-client';

export function getBackupApi(api: Api): BackupApi {
	return new BackupApi(api.configuration, undefined, api.axiosInstance);
}
