(function() {
  var CredentialsFile;
  CredentialsFile = function() {
    this.evaluate = function() {
      var dynamicValue = '';
      var credentials = JSON.parse(readFile('credentials.json'));
      dynamicValue = credentials[this.credential];
      return dynamicValue;
    };
    //this.text = function() {
      //return 'CredentialsFile: ' + credentials[this.credential];
    //};
    this.title = function() {
      return 'CredentialsFile: ' + this.credential;
    };
  };
  CredentialsFile.identifier = "me.weppler.CredentialsFile";
  CredentialsFile.inputs = [
    DynamicValueInput('credential', 'Credential', 'String'),
  ];
  CredentialsFile.title = 'CredentialsFile';
  registerDynamicValueClass(CredentialsFile);
}).call(this);

