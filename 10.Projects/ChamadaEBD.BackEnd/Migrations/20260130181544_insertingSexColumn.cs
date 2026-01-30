using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChamadaEBD.BackEnd.Migrations
{
    /// <inheritdoc />
    public partial class insertingSexColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Sex",
                table: "Users",
                type: "varchar(1)",
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sex",
                table: "Users");
        }
    }
}
