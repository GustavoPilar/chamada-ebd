using ChamadaEBD.BackEnd;
using ChamadaEBD.BackEnd._Base_._RepositoryBase_._UnitOfWork_;
using ChamadaEBD.BackEnd.Base.Context.EntityFrameworkContext;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

string connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<EntityFrameworkContext>(options =>
    options.UseMySql(connection, ServerVersion.AutoDetect(connection))
);

builder.Services.AddControllers().AddJsonOptions( options => options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles );
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped(typeof(IRepositoryBase<IEntityBase>), typeof(RepositoryBase<IEntityBase>));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddAutoMapper(cgf => { }, typeof(Program));

builder.Services.AddCors(options =>
{
    options.AddPolicy("enableAll", options =>
    {
        options.AllowAnyHeader();
        options.AllowAnyMethod();
        options.AllowAnyOrigin();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.ConfigureExceptionHandler();
}
else
{
    app.UseExceptionHandler("/Error");
}

    app.UseHttpsRedirection();

app.UseCors("enableAll");
app.UseAuthorization();

app.MapControllers();

app.Run();
