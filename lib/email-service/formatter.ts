//
type FormatterBody = string; // html_string
type RemoteComposer = { uuid: string };
type OnSiteComposer<V> = (variables: V) => FormatterBody;
type MailFormatting<V> = {
  subject: string;
  body?: string;
  template?: { uuid: string; variables: V };
};

// export interface EmailFormatterCreator<Vars> {
//   _subject: string;
//   _body: FormatterBody;
//   _variables: Vars;
//   _remote?: RemoteComposer;
//   _composer?: OnSiteComposer<Vars>;

//   composeWithRemote: (remote: RemoteComposer) => EmailFormatterCreator<Vars>;
//   composeWith: (composer: OnSiteComposer<Vars>) => EmailFormatterCreator<Vars>;

//   subject: (subject: string) => EmailFormatterCreator<Vars>;
//   compose: (variables: Vars) => EmailFormatterCreator<Vars>;
//   write: (messaeg: { subject: string; body: string }) => EmailFormatterCreator<Vars>;
//   mail: () => MailFormatting<Vars>;
// }

export class EmailFormatter<V> {
  private _subject: string;
  private _body: FormatterBody;
  private _remote?: RemoteComposer;
  private _composer?: OnSiteComposer<V>;
  private _variables!: V;

  constructor({
    composer,
    remoteComposer,
  }: {
    composer?: OnSiteComposer<V>;
    remoteComposer?: RemoteComposer;
  }) {
    this._subject = "";
    this._body = "";
    this._remote = remoteComposer;
    this._composer = composer;
  }

  subject = (subject: string) => {
    this._subject = subject;
    return this;
  };

  compose = (variables: V) => {
    if (this._composer !== undefined) {
      this._body = this._composer(variables);
    }
    return this;
  };

  write = (message: { subject: string; body: string }) => {
    this._subject = message.subject;
    this._body = message.body;
    return this;
  };

  mail = () => {
    const mail: MailFormatting<V> = {
      subject: this._subject,
      body: this._body,
    };

    if (this._remote !== undefined) {
      mail.template = {
        ...this._remote,
        variables: this._variables,
      };
    }

    return mail;
  };
}
