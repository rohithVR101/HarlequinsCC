import { TestBed } from '@angular/core/testing';

import { MemberMicroService } from './member-micro.service';

describe('MemberMicroService', () => {
  let service: MemberMicroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberMicroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
