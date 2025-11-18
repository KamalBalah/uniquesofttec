export interface IData {
  services: {
    description: string;
    list: ISectionList[];
  };
  whyUs: {
    description: string;
    list: ISectionList[];
  };
  projects: {
    description: string;
    list: IProjectsList[];
  };
  connects: { list: IConnectsList[] };
}

export interface IServicesList {
  icon: string;
  title: string;
  desc: string;
}

export interface ISectionList {
  icon: string;
  title: string;
  desc: string;
}

export interface IProjectsList {
  image: string;
  title: string;
  desc: string;
  url: string;
}

export interface IConnectsList {
  icon: string;
  url: string;
  title: string;
}
