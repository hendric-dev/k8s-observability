{
  shared+: {
    lib+: {
      utils: {
        extractImageFromDockerfile(dockerfile_content)::
          local lines = std.split(dockerfile_content, '\n');
          local startsWithFromKeyword = function(line) std.startsWith(line, 'FROM');
          std.split(std.filter(startsWithFromKeyword, lines)[0], ' ')[1],
      }
    }
  },
}
