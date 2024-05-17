import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { provideNgIconLoader } from '@ng-icons/core';

provideNgIconLoader((name: string) => {
  const http = inject(HttpClient);
  return http.get(`/assets/icons/${name}.svg`, { responseType: 'text' });
});
